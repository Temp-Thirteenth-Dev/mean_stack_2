from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/products/<int:id>', methods=['GET'])
def get_book(id):
    with open('data.json','r',encoding='utf-8') as f:
        products=json.load(f)
    for product in products:
        if product['id']==id:
            return jsonify(product)
    return jsonify({'Error':'Id not found'})

if __name__ == '__main__':
    app.run(debug=True, port=9000)
