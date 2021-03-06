
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
reqModel={}
resModel={}

#Defining a HTTP request Handler class
class ServiceHandler(BaseHTTPRequestHandler):
	def do_OPTIONS(self):        
		self.send_response(200, "ok")        
		self.send_header('Access-Control-Allow-Origin', '*')        
		self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')        
		self.send_header("Access-Control-Allow-Headers", "X-Requested-With")        
		self.send_header("Access-Control-Allow-Headers", "Content-Type")        
		self.end_headers()
		
	def _set_headers(self):
		self.send_response(200)
		self.send_header('Access-Control-Allow-Origin', '*')
		self.send_header("Content-type", "text/json")
		self.end_headers()

	def readData(self):
		content_length = int(self.headers['Content-Length']) 
		post_data = self.rfile.read(content_length)
		data=json.loads(post_data)
		global number1
		global number2 
		number1=int(data['firstNumber'])
		number2=int(data['secondNumber'])

	def do_POST(self):
		self.readData()
		if self.path.endswith('/add'):
			result=number1+number2
		if self.path.endswith('/sub'):
			result=number1-number2
		if self.path.endswith('/mul'):
			result=number1*number2
		if self.path.endswith('/div'):
			result=number1/number2

		resModel['result']=result
		print(json.dumps(resModel))
		self._set_headers()
		self.wfile.write(json.dumps(resModel).encode())
	
def main():
    PORT=8080
    server_address=('localhost',PORT)
    server=HTTPServer(server_address, ServiceHandler)
    print('Server running on port %s' % PORT)
    server.serve_forever()
	


if __name__=='__main__':
    main()
