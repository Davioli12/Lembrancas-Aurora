from flask import Flask, render_template, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'segredo-aurora'  # Usado para guardar o progresso do usuário

@app.route('/')
def index():
    session.clear()
    return render_template('index.html')

@app.route('/fragmento1')
def fragmento1():
    session['frag1'] = True
    return render_template('fragmento1.html')

@app.route('/fragmento2')
def fragmento2():
    if not session.get('frag1'):
        return redirect(url_for('fragmento1'))
    session['frag2'] = True
    return render_template('fragmento2.html')

@app.route("/fragmento3")
def fragmento3():
    if not session.get('frag2'):
        return redirect(url_for('fragmento2'))
    session['frag3'] = True
    return render_template('fragmento3.html')

@app.route("/fragmento4")
def fragmento4():
    if not session.get('frag3'):
        return redirect(url_for('fragmento3'))
    session['frag4'] = True
    return render_template('fragmento4.html')

@app.route('/despertar')
def despertar():
    if not session.get('frag4'):
        return redirect(url_for('fragmento4'))
    session['despertar'] = True
    return render_template('despertar.html')

@app.route('/lembrancas')
def lembrancas():
    if not session.get('despertar'):
        return redirect(url_for('despertar'))
    return render_template('lembrancas.html')

if __name__ == '__main__':
    app.run(debug=True)
