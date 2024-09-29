from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to NutriLinks!"})

@app.route('/api/donate', methods=['POST'])
def donate():
    data = request.json
    return jsonify({"message": "Donation received!", "data": data}), 201

@app.route('/api/needs', methods=['GET'])
def needs():
    needs_data = {
        "fruits": 50,
        "vegetables": 30,
        "grains": 20
    }
    return jsonify(needs_data)

if __name__ == "__main__":
    app.run(debug=True)