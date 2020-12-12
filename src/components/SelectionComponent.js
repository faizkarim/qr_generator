export default function SelectionComponent(props) {
  if (props.type === "subject") {
    if (props.tingkatan < 4 && props.tingkatan !== "") {
      return props.data[0].map((val, i) => {
        return (
          <option key={val.id} value={val.subject_name}>
            {val.subject_name}
          </option>
        );
      });
    } else if(props.tingkatan >= 4 ){
      return props.data[1].map((val, i) => {
        return (
          <option key={val.id} value={val.subject_name}>
            {val.subject_name}
          </option>
        );
      });
    }else{
      return false
    }
  } else if (props.type === "className") {
    return props.data.map((val, i) => {
      return (
        <option key={val.id} value={val.class_name}>
          {val.class_name}
        </option>
      );
    });
  }
}
