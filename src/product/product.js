import React from 'react'

const Product = ({prod}) => {
    return (
        <div>
    <div style={styles.container}>
        <h3 style={styles.name}>{prod.name}</h3>
        <img src={prod.image} alt={prod.name} style={styles.image}/>
        <p style = {styles.price}>{prod.price}</p>
        <p style = {styles.description}>{prod.description}</p>
        
    </div>
    <p style={{border:'1px solid grey', color :'black',fontSize:'20px',margin:'15px', padding:'8px', justifySelf:'start'}}>hello there!</p>
    </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px',
        width: '300px',
        height: '400px',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '200px',
        height: '300px',
        marginBottom: '10px',
        mixBlendMode : 'multiply'
    },
    name: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px',
        
    },
    price: {
        fontSize: '16px',
        color: '#333',
        marginBottom: '5px',
    },
    description: {
        fontSize: '14px',
        color: '#666',
    },
    title:{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    }
}
export default Product
