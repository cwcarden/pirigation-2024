from flask import Flask, jsonify
from flask_cors import CORS
# from services.weather.weather import  -- for future use

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/message')
def get_message():
    return jsonify(message='Watering')

if __name__ == '__main__':
    app.run(port=3001, debug=True)
