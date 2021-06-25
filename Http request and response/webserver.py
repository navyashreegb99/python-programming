from http.server import HTTPServer, BaseHTTPRequestHandler
import cgi

class requestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.endswith('/calc'):
            self.send_response(200)
            self.send_header('content-type','text/html')
            self.end_headers()

            output=''
            output+='<html><body>'
            output+='<h1>Calculator</h1>'
            output+='<form method="POST" enctype="multipart/form-data" action="/calc" >'
            output+='<input name="number1" type="text" placeholder="First number" style="margin-right:10px;">'
            output+='<input name="operator" type="text" placeholder="operator" style="margin-right:10px;">'
            output+='<input name="number2" type="text" placeholder="Second number"style="margin-right:10px;">'
            output+='<input type="submit" value="=">'
            output+='</form>'
            output+='</body></html>'
            self.wfile.write(output.encode())
        
        if self.path.endswith('/res'):
            self.send_response(200)
            self.send_header('content-type','text/html')
            self.end_headers()

            output=''
            output+='<html><body>'
            output+='<h1>Calculator</h1>'
            output+=' <label for="fname" style="font-size:30px">'
            if res=="INVALID OPERATOR":
                output+=res
            else:
                output+=no1[0]+' '+opt[0]+' '+no2[0]+' '+'='+' '+str(res)
            output+='</label>'
            output+='</body></html>'
            self.wfile.write(output.encode())
     
           
    
    def do_POST(self):
        if self.path.endswith('/calc'):
            ctype,pdict=cgi.parse_header(self.headers.get('content-type'))
            pdict['boundary'] = bytes(pdict['boundary'], "utf-8")
            content_len = int(self.headers.get('Content-length'))
            pdict['CONTENT-LENGTH'] = content_len
            global no1
            global no2
            global opt
            global res
            if ctype=='multipart/form-data':
                fields=cgi.parse_multipart(self.rfile,pdict)
                no1=fields.get('number1')
                opt=fields.get('operator')
                no2=fields.get('number2')
                print(opt)
                print(no1)
                print(no2)
                if opt[0]=='+':
                    res=int(no1[0])+int(no2[0])
                elif opt[0]=='-':
                    res=int(no1[0])-int(no2[0])
                elif opt[0]=='*':
                    res=int(no1[0])*int(no2[0])
                elif opt[0]=='/':
                    res=int(no1[0])/int(no2[0])
                else:
                    res="INVALID OPERATOR"
                print(res)
           
            self.send_response(301)
            self.send_header('content-type','text/html')
            self.send_header('Location','/res')
            self.end_headers()
            
            
    
def main():
    PORT=8000
    server_address=('localhost',PORT)
    server=HTTPServer(server_address, requestHandler)
    print('Server running on port %s' % PORT)
    server.serve_forever()


if __name__=='__main__':
    main()
