import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DE3232',
    },
    container: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Arial',
    },
    subTitle: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: '#FFFFFF',
    },
    input: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        marginBottom: 15,
        color: '#5B5B5B',
        fontSize: 18,
        borderRadius: 30,
        padding: 10,
        paddingLeft: 20,
    },
    submit: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        elevation: 10,
        marginTop: 40,
    },
    submitText: {
        color: '#DE3232',
        fontSize: 24,
        fontWeight: 'bold',
    },
    bottom: {
        marginTop: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#5B5B5B',
        borderTopWidth: 1,
    }
});

export default styles;
