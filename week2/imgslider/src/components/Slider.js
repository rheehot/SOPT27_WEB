import React, {useState, useEffect} from 'react'
import styled, { css } from 'styled-components';
import Image from './Image';

const DialogTemplate = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);
    z-index: 2;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 500px;
    width: 60%;
    background: white;
`;
const ImageList = styled.div`
    width: 250px;
    hight: 250px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const LeftButton = styled.div`
    position: absolute;
    left:10px;
    cursor: pointer;
    color: white;
    background-color: black;
    border-radius: 50%;
    z-index:1;
`;
const RightButton = styled.div`
    position: absolute;
    left:210px;
    transform: rotate(180deg);
    cursor: pointer;
    color: white;
    background-color: black;
    border-radius: 50%;
    z-index:2;
`;
const List = [
    {
        "idx" : 1,
        "src" : "http://localhost:3000/images/cheeze1.jpeg"
    },
    {
        "idx" : 2,
        "src" : "http://localhost:3000/images/cheeze2.jpeg"
    },
    {
        "idx" : 3,
        "src" : "http://localhost:3000/images/cheeze3.jpeg"
    }
]
const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    border : none;
    background : white;
    font-size: 20px;
    cursor: pointer;
`;
function Slider({onHandleDialog}) {
    const [choiceIdx,setChoiceIdx] = useState(1);

    const onClickLeftButton = () => {
        if(choiceIdx != 1){
            setChoiceIdx(choiceIdx-1);
        }
    }
    const onClickRightButton = () => {
        if(choiceIdx != 3){
            setChoiceIdx(choiceIdx+1);
        }
    }
    return (
        <DialogTemplate>
            <Wrapper>
                <CloseButton onClick={onHandleDialog}>
                        <i class="fas fa-times"></i>
                </CloseButton>
                <ImageList choice={choiceIdx}>
                    <LeftButton onClick={onClickLeftButton}>
                        <i className="fas fa-chevron-circle-left fa-2x left"></i>
                    </LeftButton>
                    {
                        List.map((img) => (
                            <Image
                            idx={img.idx}
                            src={img.src}
                            choice={choiceIdx}>
                            </Image>
                        ))
                    } 
                    <RightButton onClick={onClickRightButton}>
                        <i className="fas fa-chevron-circle-left fa-2x right"></i>
                    </RightButton>
                </ImageList>
            </Wrapper>
        </DialogTemplate>
    )
}

export default Slider
