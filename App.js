import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            textoFrase: '',
            img: require('./src/biscoito.png'),
            
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this)
        this.reset = this.reset.bind(this)

        this.frases = ['Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?', 
        'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 
        'A juventude não é uma época da vida, é um estado de espírito.', 
        'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.', 
        'Siga os bons e aprenda com eles.',
        'O riso é a menor distância entre duas pessoas.', 
        'Se você se sente só é porque construiu muros ao invés de pontes.',
        'Vencer é 90 por cento suor e 10 por cento de engenho.']

    }

    quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

        this.setState({
            textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
            img: require('./src/biscoitoAberto.png')
        })
    }

    reset(){
        this.setState({
            textoFrase: '',
            img: require('./src/biscoito.png')
        })
    }

    render(){
        return(
            <View style={styles.container}>
                
                <Image
                    source={this.state.img}
                    style={styles.img}
                />

                <Text style={styles.textoFrase}>{ this.state.textoFrase }</Text>

                <View style={styles.btnArea}>

                    <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
                        <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={this.reset}>
                        <Text style={styles.btnTexto}>Reset</Text>
                    </TouchableOpacity>

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: 250,
        height: 250
    },
    textoFrase:{
        color: '#dd7b22',
        fontSize: 20,
        margin: 20,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    botao:{
        width: 220,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
        margin: 2
    },
    btnArea:{
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 0,
    },
    btnTexto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d77b22',
        textAlign: 'center',
        padding: 10,
    }
});

export default App;