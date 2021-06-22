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
            output+='<h2><a href="/calc/add">Add</a></h2>'
            output+='<h2><a href="/calc/sub">Subtract</a></h2>'
            output+='<h2><a href="/calc/mul">Multiply</a></h2>'
            output+='<h2><a href="/calc/div">Divide</a></h2>'
            output+='</body></html>'
            self.wfile.write(output.encode())
    
   
        if self.path.endswith('/add'):
            self.send_response(200)
            self.send_header('content-type','text/html')
            self.end_headers()

            output=''
            output+='<html><body>'
            output+='<h1>Add numbers</h1>'
            output+='<form method="POST" enctype="multipath/form-data" action="/calc/add">'
            output+='<input name="number1" type="text" placeholder="First number">'
            output+='<input name="number2" type="text" placeholder="Second number">'
            output+='<input type="submit" value="Add">'
            output+='</form>'
            output+='</body></html>'
            self.wfile.write(output.encode())

    def do_POST(self):
        if self.path.endswith('/add'):
            ctype,pdict=cgi.parse_header(self.headers.get('content-type'))
            
            if ctype=='multipart/form-data':
                fields=cgi.parse_multipart(self.rfile,pdict)
                number1=fields.get('number1')
                number2=fields.get('number2')
                print(number1)
                print(number2)
                res=number1+number2
                print(res)
                self.wfile.write(res.encode())
            self.send_response(200)
            self.send_header('content-type','text/html')
            self.end_headers()
            
                


        

   # def do_POST(self):
        

def main():
    PORT=8000
    server_address=('localhost',PORT)
    server=HTTPServer(server_address, requestHandler)
    print('Server running on port %s' % PORT)
    server.serve_forever()


if __name__=='__main__':
    main()
