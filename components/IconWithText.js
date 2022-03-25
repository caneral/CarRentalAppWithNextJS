import React from 'react'
import styles from '../styles/Icon.module.css'

const IconWithText = ({children}) => {
  return (
    <div className={styles.IconWithText}>{children}</div>
  )
}

export default IconWithText