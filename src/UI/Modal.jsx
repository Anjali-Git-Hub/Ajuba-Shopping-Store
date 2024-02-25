import React from 'react'
import styles from './Modal.module.css'
import { createPortal } from 'react-dom'
function Modal({children,setIsModalOpen}) {
  return createPortal(<>
  <div className={styles.backdrop} onClick={()=>{setIsModalOpen(false)}}></div>
  <div className={styles.modalContent}>{children}</div>
  </>,document.getElementById("modal"))
}

export default Modal