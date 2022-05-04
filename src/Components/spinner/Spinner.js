import React ,{useState}from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import { Modal, Button } from 'antd';
import IMG from '../../Assests/small-ants.jpg';
import Spinnr from '../SpinnerExample/Spinnr';
const Spinner = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);    
    const [name, setName] = useState();    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    const img=()=>{
        <img src={IMG}/>
    }
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    
    const segments = [
        'prize1',
        'prize2',
        'prize3',
        'prize4',
        'prize5',
        'prize6',
        'prize7',
        'prize8',
        'prize9',
        'prize10',
        'prize11',
        'prize12'
      ]
      const abc=[
          {
              name:"Rupinder",
              img:require("../../Assests/small-ants.jpg")
          },
          {
              name:"rajju"
          }   
      ]
      const segColors = [

        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000',
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
      ]
      const onFinished = (winner) => {
        console.log(winner)
        alert(winner)
        
      }
      const showModal = (winner) => {
        setIsModalVisible(true);
        setName(winner)
      };
      console.log("--!--",abc)
    return (
        <div>
           <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment='prize4'
      onFinished={(winner) => {showModal(winner)}}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={190}
      upDuration={100}
      downDuration={1000}
      fontFamily='Arial'
    />
    <Spinnr/>
     <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{name}</p>
      </Modal>
        </div>
    )
}

export default Spinner
