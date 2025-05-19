import styles from '../styles/Gallery.module.css'
import Whale from '../assets/whale.png'
import Panther from '../assets/panther.png'
import Frida from '../assets/frida.png'

export default function Gallery(){
    return (<>
    <div className={styles.Bg}>
        <div id="wrapper">
  
<div className={styles.foreground}><img src={Whale}/></div>



<div className={styles.background}><img src={Panther} /></div>
</div>
</div>
</>
    );
}