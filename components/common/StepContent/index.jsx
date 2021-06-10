import { Box, Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../RadioButtons"
import StatusBox from "../StatusBox"
import Select from "./Select"
import { MiddleContainer, StepContentContainer, StepImageContainer } from "./styles"
import Input from '../../form/Input'


const StepContent = ({ data, noStatusBox, isCheckout }) => {
    // <Flex
    //     column
    //     alignItems='flex-start'
    //     justifyContent='space-between'
    //     margin='50px 5% 50px 50px'
    //     width='450px'
    //     // height='620px'
    //     // padding='20px'
    // >
    // </Flex>

    // console.log('data: ', data)

    // if (isCheckout) {
    //     return (
    //         <Flex
    //             width='100%'
    //             justifyContent='space-evenly'
    //             key={data.title}
    //         >
    //             {/* <StepImageContainer>
    //                 <img style={{ width: '100%' }} src={data.imageSrc ? data.imageSrc : "/images/americana.jpg"} alt="" />
    //             </StepImageContainer> */}
    //             <StepContentContainer isCheckout>
    //                 <TitleContainer>
    //                     <h4>{data.caption.toUpperCase()}</h4>
    //                     <h2>{data.title.toUpperCase()}</h2>
    //                     <p>{data.subtitle}</p>
    //                 </TitleContainer>
    //                 {noStatusBox ? (
    //                     <>
    //                         {data.options && (
    //                             <RadioButtons
    //                                 options={data.options}
    //                                 onChange={data.onChange}
    //                                 select={data.value}
    //                             />
    //                         )}
    //                         {data.inputs && data.inputs.map((e, i) => (
    //                             <Input
    //                                 value={e.value}
    //                                 onChange={(event) => e.onChange(event.target.value)}
    //                                 label={e.label}
    //                                 placeholder={e.placeholder}
    //                                 type={e.type ? e.type : 'text'}
    //                                 margin='10px'
    //                                 width={e.width ? e.width : '100%'}
    //                                 small
    //                                 key={e.label}
    //                             />
    //                         ))}
    //                     </>
    //                 ) : (
    //                 <MiddleContainer>
    //                     {data.options && (
    //                         <RadioButtons
    //                             options={data.options}
    //                             onChange={data.onChange}
    //                             select={data.value}
    //                         />
    //                     )}
    //                     {data.inputs && data.inputs.map((e, i) => (
    //                         <Input
    //                             value={e.value}
    //                             onChange={(event) => e.onChange(event.target.value)}
    //                             label={e.label}
    //                             placeholder={e.placeholder}
    //                             type={e.type ? e.type : 'text'}
    //                             margin='10px'
    //                             width={e.width ? e.width : '100%'}
    //                             small
    //                             key={e.label}
    //                         />
    //                     ))}
    //                     {/* <Select /> */}
    //                 </MiddleContainer>
    //                 )}
    //                 {!noStatusBox && (
    //                     <StatusBox />
    //                 )}
    //             </StepContentContainer>
    //         </Flex>
    //     )
    // }

    return (
        <Flex
            width='100%'
            justifyContent='space-evenly'
            key={data.title}
        >
            <StepImageContainer>
                <img style={{ width: '100%' }} src={data.imageSrc ? data.imageSrc : "/images/americana.jpg"} alt="" />
            </StepImageContainer>
            <StepContentContainer>
                <TitleContainer>
                    <h4>{data.caption.toUpperCase()}</h4>
                    <h2>{data.title.toUpperCase()}</h2>
                    <p>{data.subtitle}</p>
                </TitleContainer>
                {noStatusBox ? (
                    <>
                        {data.options && (
                            <RadioButtons
                                options={data.options}
                                onChange={data.onChange}
                                select={data.value}
                            />
                        )}
                        {data.inputs && data.inputs.map((e, i) => (
                            <Input
                                value={e.value}
                                onChange={(event) => e.onChange(event.target.value)}
                                label={e.label}
                                placeholder={e.placeholder}
                                type={e.type ? e.type : 'text'}
                                margin='10px'
                                width={e.width ? e.width : '100%'}
                                small
                                key={e.label}
                            />
                        ))}
                    </>
                ) : (
                <MiddleContainer>
                    {data.options && (
                        <RadioButtons
                            options={data.options}
                            onChange={data.onChange}
                            select={data.value}
                        />
                    )}
                    {data.inputs && data.inputs.map((e, i) => (
                        <Input
                            value={e.value}
                            onChange={(event) => e.onChange(event.target.value)}
                            label={e.label}
                            placeholder={e.placeholder}
                            type={e.type ? e.type : 'text'}
                            margin='10px'
                            width={e.width ? e.width : '100%'}
                            small
                            key={e.label}
                        />
                    ))}
                    {/* <Select /> */}
                </MiddleContainer>
                )}
                {!noStatusBox && (
                    <StatusBox />
                )}
            </StepContentContainer>
        </Flex>
    )
}

export default StepContent