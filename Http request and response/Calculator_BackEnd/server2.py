
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
reqModel={}
resModel={}
index=0

#Defining a HTTP request Handler class
class ServiceHandler(BaseHTTPRequestHandler):
	def do_OPTIONS(self):
		self.send_response(200, "ok")
		self.send_header('Access-Control-Allow-Origin', '*')
		self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
		self.send_header("Access-Control-Allow-Headers", "X-Requested-With")

	def do_POST(self):
		if self.path.endswith('/add'):
			content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
			post_data = self.rfile.read(content_length)
			print(post_data)
			data=json.loads(post_data)
			print(data['firstNumber'])
			print(data['secondNumber'])
			result=data['firstNumber']+data['secondNumber']
			resModel['result']=result
			print(json.dumps(resModel))
			self.send_response(200)
			self.send_header('Access-Control-Allow-Origin', '*')
			self.send_header('Content-type','text/json')
			self.end_headers()
			#prints all the keys and values of the json file
			self.wfile.write(json.dumps(resModel).encode())
	    
		if self.path.endswith('/sub'):
			content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
			post_data = self.rfile.read(content_length)
			print(post_data)
			data=json.loads(post_data)
			print(data['firstNumber'])
			print(data['secondNumber'])
			result=data['firstNumber']-data['secondNumber']
			resModel['result']=result
			print(json.dumps(resModel))
			self.send_response(200)
			self.send_header('Content-type','text/json')
			self.end_headers()
			#prints all the keys and values of the json file
			self.wfile.write(json.dumps(resModel).encode())

		if self.path.endswith('/mul'):
			content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
			post_data = self.rfile.read(content_length)
			print(post_data)
			data=json.loads(post_data)
			print(data['firstNumber'])
			print(data['secondNumber'])
			result=data['firstNumber']*data['secondNumber']
			resModel['result']=result
			print(json.dumps(resModel))
			self.send_response(200)
			self.send_header('Content-type','text/json')
			self.end_headers()
			#prints all the keys and values of the json file
			self.wfile.write(json.dumps(resModel).encode())
		
		if self.path.endswith('/div'):
			content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
			post_data = self.rfile.read(content_length)
			print(post_data)
			data=json.loads(post_data)
			print(data['firstNumber'])
			print(data['secondNumber'])
			result=data['firstNumber']/data['secondNumber']
			resModel['result']=result
			print(json.dumps(resModel))
			self.send_response(200)
			self.send_header('Content-type','text/json')
			self.end_headers()
			#prints all the keys and values of the json file
			self.wfile.write(json.dumps(resModel).encode())

	
def main():
    PORT=8080
    server_address=('localhost',PORT)
    server=HTTPServer(server_address, ServiceHandler)
    print('Server running on port %s' % PORT)
    server.serve_forever()
	


if __name__=='__main__':
    main()
