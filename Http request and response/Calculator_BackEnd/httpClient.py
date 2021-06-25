import requests
r =requests.get('http://localhost:8000/')
print(r.status_code)

pload = {'firstno':10,'secondno':20}
r = requests.post('http://localhost:8000/add',data = pload)
print(r.text)
