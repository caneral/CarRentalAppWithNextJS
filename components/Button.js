import React from 'react'
import styles from '../styles/Button.module.css'

const Button = ({title}) => {
  return (
    <button className={styles.Button}>{title}</button>
  )
}

export default Button