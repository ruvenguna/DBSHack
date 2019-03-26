from flask import Flask, jsonify, request
import requests, ast
import operator

app = Flask(__name__)



@app.route("/getAccounts", methods=["POST"])
def getAccounts():
    myinput = request.get_json()
    acc_dict = {}

    cutomer_id = myinput['customerId']
    endpoint_debit = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/{}'.format(cutomer_id)
    headers = {
        'Content-Type' : 'application/json',
        'token' : '545a6a5f-f955-48c1-936b-d545eac1aee8',
        'identity' : 'Group8'
    }
    debit_acc = requests.get(endpoint_debit, headers=headers)
    acc_dict['debit'] = ast.literal_eval(debit_acc.text)

    
    endpoint_credit = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/accounts/credit/{}'.format(cutomer_id)
    
    credit_acc = requests.get(endpoint_credit, headers=headers)
    acc_dict['credit'] = ast.literal_eval(credit_acc.text)


    return jsonify(acc_dict)



@app.route("/balance", methods=["POST"])
def balance():
    myinput = request.get_json()
    acc_id = myinput['accountId']
    endpoint_balance = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/{}/balance'.format(acc_id)
    headers = {
        'Content-Type' : 'application/json',
        'token' : '545a6a5f-f955-48c1-936b-d545eac1aee8',
        'identity' : 'Group8'
    }
    code = requests.get(endpoint_balance, headers=headers)
    balance = ast.literal_eval(code.text)
    bal_dict = {'availableBalance' : float(balance['availableBalance'])}

    return jsonify(bal_dict)

@app.route("/topTransactions", methods=["POST"])
def topTransactions():
    myinput = request.get_json()
    acc_id = myinput['accountId']
    num = int(myinput['numOfTxn']) * -1
    endpoint_topTransactions = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/transactions/{}?from=01-01-2019&to=01-31-2019'.format(acc_id)
    headers = {
        'Content-Type' : 'application/json',
        'token' : '545a6a5f-f955-48c1-936b-d545eac1aee8',
        'identity' : 'Group8'
    }
    code = requests.get(endpoint_topTransactions, headers=headers)
    all_transactions = ast.literal_eval(code.text)

    return jsonify(all_transactions[num:])

@app.route("/topCat", methods=["POST"])
def topCat():

    myinput = request.get_json()
    acc_id = myinput['accountId']

    endpoint_topTransactions = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/transactions/{}?from=01-01-2019&to=01-31-2019'.format(acc_id)
    headers = {
        'Content-Type' : 'application/json',
        'token' : '545a6a5f-f955-48c1-936b-d545eac1aee8',
        'identity' : 'Group8'
    }
    code = requests.get(endpoint_topTransactions, headers=headers)
    all_transactions = ast.literal_eval(code.text)
   
    num = len(all_transactions)
    total_num_of_dic = list(range(0, num))

    total_amt_dict ={}
    for i in total_num_of_dic:
        if all_transactions[i]['type'] == 'DEBIT':
            if all_transactions[i]['tag'] in total_amt_dict:
                total_amt_dict[all_transactions[i]['tag']] += float(all_transactions[i]['amount'])
            else:
                total_amt_dict[all_transactions[i]['tag']] = float(all_transactions[i]['amount'])

    total_amt_list = [(k,v) for k,v in total_amt_dict.items()]
    
    def sortSecond(val): 
        return val[1]

    total_amt_list.sort(key = sortSecond, reverse=True)
    print(total_amt_list)
    return jsonify(total_amt_list)

@app.route("/savings", methods=["POST"])
def savings():    
    myinput = request.get_json()
    acc_id = myinput['accountId']

    endpoint_topTransactions = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/transactions/{}?from=01-01-2018&to=01-31-2019'.format(acc_id)
    headers = {
        'Content-Type' : 'application/json',
        'token' : '545a6a5f-f955-48c1-936b-d545eac1aee8',
        'identity' : 'Group8'
    }
    code = requests.get(endpoint_topTransactions, headers=headers)
    all_transactions = ast.literal_eval(code.text)
   
    num = len(all_transactions)
    total_num_of_dic = list(range(0, num))

    total_amt_dict ={}
    for i in total_num_of_dic:
        if all_transactions[i]['type'] == 'DEBIT':
            if all_transactions[i]['date'][:7] in total_amt_dict:
                total_amt_dict[all_transactions[i]['date'][:7]] -= float(all_transactions[i]['amount'])
            else:
                total_amt_dict[all_transactions[i]['date'][:7]] = float(all_transactions[i]['amount']) * -1

        else:
            if all_transactions[i]['date'][:7] in total_amt_dict:
                total_amt_dict[all_transactions[i]['date'][:7]] += float(all_transactions[i]['amount'])
            else:
                total_amt_dict[all_transactions[i]['date'][:7]] = float(all_transactions[i]['amount'])
    
    

    return jsonify(total_amt_dict)


if __name__ == "__main__":
    app.run(debug=True)