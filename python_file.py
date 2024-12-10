from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

@app.route('/api/python', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Python backend!"})

if __name__ == '__main__':
    app.run(debug=True)
