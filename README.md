# Serverless eCommerce Platform

## Obiectiv
Crearea unei platforme de comert electronic (eCommerce) precum Amazon.com, eMag etc., folosind o arhitectura serverless. 
Pentru a respecta aceasta arhitectura, partea de frontend a aplicatiei va fi implementata folosind biblioteca React.js, iar codul va fi distribuit catre clienti folosind un Content Delivery Network si va rula in broswer-ul acestora.
Pentru a obtine cotinut de la partea de backend a aplicatiei, componenta de frontend va comunica cu cea de backend intr-un mod RESTful.
Logica componentei de backend va fi executata folosind serivicul serverless AWS Lambda, ce va fi expus catre componenta frontend folosind un serviciu de tip API Gateway.
Ca surse de date ale aplicatiei, vom folosi o baza de date NoSQL, precum AWS DynamoDB, pentru a stoca datele despre produsele disponibile pe platforma; si un serviciu de stocare Cloud, precum AWS Simple Storage Service (S3), pentru a stoca asset-urile statice ale platformei (fisiere CSS, imagini, fisiere JS etc).
