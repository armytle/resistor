from flask import Flask, request, jsonify, render_template , redirect, url_for
from inference_sdk import InferenceHTTPClient
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)


UPLOAD_FOLDER = 'uploads'  # Đường dẫn thư mục lưu trữ ảnh
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # Tạo thư mục nếu chưa tồn tại


# Khởi tạo client
CLIENT = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key="VyLYoteWiOzGwieQEwGh"
)

@app.route('/')
def home():
    return render_template('index.html')  # Đảm bảo rằng index.html nằm trong thư mục templates

@app.route('/upload', methods=['POST'])
def upload_image():


    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    
    file = request.files['image']
    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)  # Lưu file vào đường dẫn đã tạo
        
    # Gửi ảnh đến API Roboflow
    
    result = CLIENT.infer(filepath, model_id="resistorassignment/3")
    colors = str(result['predictions'][0]['class'])
    

    # Chuyển đổi các màu sang định dạng bạn cần (vd: yellow-blue-red-gold)
    color_str = colors.split("-")
    print(color_str)
    return jsonify({'colors': color_str})



if __name__ == '__main__':
    app.run(debug=True)
    

