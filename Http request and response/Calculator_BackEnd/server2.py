
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
#{"1": "First", "2": "Second", "3": "Third", "4": "Fourth"}
with open("data.json") as data_file:
	data = json.load(data_file)

#Defining a HTTP request Handler class
class ServiceHandler(BaseHTTPRequestHandler):
	#sets basic headers for the server
	
		
	def do_GET(self):
		#defining all the headers
		self.send_response(200)
		self.send_header('Content-type','text/html')
		self.end_headers()
		#prints all the keys and values of the json file
		self.wfile.write(json.dumps(data).encode())

	def do_POST(self):
		temp = self._set_headers()
		key=0
		#getting key and value of the data dictionary
		for key,value in data.items():
			pass
		index = int(key)+1
		data[str(index)]=str(temp)
		#write the changes to the json file
		with open("data.json",'w+') as file_data:
			json.dump(data,file_data)
		self.wfile.write(json.dumps(data[str(index)]).encode())
		
	
def main():
    PORT=8080
    server_address=('localhost',PORT)
    server=HTTPServer(server_address, ServiceHandler)
    print('Server running on port %s' % PORT)
    server.serve_forever()


if __name__=='__main__':
    main()
