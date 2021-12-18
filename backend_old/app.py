import numpy as np
from sklearn import preprocessing
from sklearn.ensemble import RandomForestClassifier
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
from flask import request
import json

#export FLASK_ENV=development
#flask run
app = Flask(__name__)

CORS(app)

fertilizer = pickle.load(open('fertilizer.pkl', 'rb'))
irrigation = pickle.load(open('irrigation.pkl', 'rb'))
model5 = pickle.load(open('model4.pkl', 'rb'))
croptype = pickle.load(open('croptype.pkl', 'rb'))

@app.route('/fertilizer')
def home():
    return render_template('form.html')
@app.route('/irrigation')
def home2():
    return render_template('form2.html')
@app.route('/production')
def home3():
    return render_template('form3.html')
@app.route('/crop')
def home4():
    return render_template('form4.html')

@app.route('/fertilizer',methods=['POST'])
def predict():
    data=json.loads(request.data)
    soiltype=float(data["soilType"])
    n=float(data['n'])
    p=float(data['p'])
    k=float(data['k'])
    fertilizer=float(data['fertilizer'])
    croptype=float(data['croptype'])
    int_features=[soiltype,n,p,k,fertilizer,croptype]
    nm=preprocessing.scale(int_features)
    final_features = [np.array(nm)]
    prediction = fertilizer.predict(final_features)
    output = prediction[0]
    res=str(output[0])
    return res

@app.route('/irrigation',methods=['POST'])
def predict2():
    data=json.loads(request.data)
    soilHumidity=float(data['soilHumidity'])
    soilwater=float(data['soilwater'])
    cropseason=float(data['cropseason'])
    area=float(data['area'])
    int_features = [soilHumidity,soilwater,cropseason,area]
    nm=preprocessing.scale(int_features)
    final_features = [np.array(nm)]
    prediction = irrigation.predict(final_features)
    output = prediction[0]
    res=str(output[0])
    return res

@app.route('/Production',methods=['POST'])
def predict3():
    '''
    For rendering results on HTML GUI
    '''
    int_features = [float(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model3.predict(final_features)
    output = prediction[0]

    return render_template('form3.html', prediction_text3='Production will be of approx  {} quintals'.format(output))

@app.route('/crop',methods=['POST'])
def predict4():
    data=json.loads(request.data)
    print(data)
    ph=float(data['ph'])
    n=float(data['n'])
    p=float(data['p'])
    k=float(data['k'])
    temp=float(data['temp'])
    humidity=float(data['humidity'])
    rainfall=float(data['rainfall'])
    int_features = [n,p,k,temp,humidity,ph,rainfall]
    print(int_features)
    final_features = [np.array(int_features)]
    prediction = croptype.predict(final_features)
    res=prediction[0]
    return res

if __name__ == "__main__":
    app.run(debug=True)
 

