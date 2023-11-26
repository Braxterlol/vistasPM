import '../../css/App.css'
export default function Imagen(props) {

  return <img className={props.className} src={props.logosrc} width={props.logoWidth} height={props.logoHeight} alt=""/>
}
