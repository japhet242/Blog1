export function Button ({color="primary",...props}) {
    const newprops = {
        className:`btn btn-${color}`,
        ...props
    }
    if (props.href) {
      return  <a {...newprops}></a>
    }
   return <button {...newprops}></button>
}