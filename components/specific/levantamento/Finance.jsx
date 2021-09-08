import { Box, Flex, TitleContainer } from "../../Containers"
import Select from "../../form/Select"
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "../../common/StepContent/styles"
import Input from '../../form/Input'
import { useContext, useEffect, useState } from "react"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { UserContext } from "../../../contexts/UserContext"
import { getCityByUF, getUFs } from "../../../services/geoClient"
import { FinancialSimContext } from "../../../contexts/FinancialSim"
import { SimulationStatusContext } from "../../../contexts/SimulationStatus"


const Finance = ({ small }) => {

    const { resources, setResources } = useContext(FinancialSimContext)
    const { user, setUser } = useContext(UserContext)

    const data = {
        caption: 'Recursos',
        title: 'Financeiros',
        value: resources.valor_terreno,
        imageSrc: '/images/Ícones/Ícones 2.svg',
        onChange: newValue => setResources({
            ...resources,
            valor_terreno: newValue
        }),
        inputs: [
            {
                value: resources.valor_terreno,
                onChange: newValue => setResources({
                    ...resources,
                    valor_terreno: newValue
                }),
                label: 'Valor estimado para o terreno',
                placeholder: 'Insira o valor em reais',
                type: 'number'
            },
            {
                value: resources.valor_entrada,
                onChange: newValue => setResources({
                    ...resources,
                    valor_entrada: newValue
                }),
                label: 'Valor disponível para entrada',
                placeholder: 'Insira o valor da entrada em reais',
                type: 'number'
            },
            {
                value: resources.valor_fgts,
                onChange: newValue => setResources({
                    ...resources,
                    valor_fgts: newValue
                }),
                label: 'Tem FGTS? Se sim, quanto?',
                placeholder: 'Insira o valor do FGTS',
                type: 'number'
            },
            {
                value: resources.num_pis,
                onChange: newValue => setResources({
                    ...resources,
                    num_pis: newValue
                }),
                label: 'Número do pis',
                placeholder: 'Insira o número do pis',
                type: 'number'
            },
            {
                value: resources.parcelas,
                onChange: newValue => setResources({
                    ...resources,
                    parcelas: newValue
                }),
                label: 'Quantidade de parcelas',
                placeholder: 'Insira a número de parcelas',
                type: 'number'
            },
        ]
    }

    if (small) {
        return (
            <>
                {/* <Box height='50px'></Box> */}
                <SlideContainer
                    // width='100%'
                    // maxHeight='calc(100vh - 200px)'
                    // justifyContent='space-evenly'
                    small
                    key={data.title}
                >
                    <StepContentContainer
                    small
                        key={`${data.title}_step_content_container`}
                    >
                        <TitleContainer
                            // margin='50px 0 0'
                            key={`${data.title}_title_container`}
                        >
                            <h4>{data.caption.toUpperCase()}</h4>
                            <h2>{data.title.toUpperCase()}</h2>
                            <p>{data.subtitle}</p>
                        </TitleContainer>
                        <MiddleContainer
                            key={`${data.title}_middle_container`}
                        >
                            {data.inputs && data.inputs.map((e, i) => (
                                <Input
                                    value={e.value}
                                    onChange={(event) => e.onChange(event.target.value)}
                                    label={e.label}
                                    placeholder={e.placeholder}
                                    type={e.type ? e.type : 'text'}
                                    margin='10px 0'
                                    width={e.width ? e.width : '100%'}
                                    small
                                    key={e.label}
                                />
                            ))}
                        </MiddleContainer>
                    </StepContentContainer>
                </SlideContainer>
            </>
        )
    }

    return (
        <>
            {/* <Box height='50px'></Box> */}
            <SlideContainer
                // width='100%'
                // maxHeight='calc(100vh - 200px)'
                // justifyContent='space-evenly'
                key={data.title}
            >
                <StepImageContainer
                    key={`${data.title}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src={data.imageSrc ? data.imageSrc : "/images/americana.jpg"} alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${data.title}_step_content_container`}
                >
                    <TitleContainer
                        // margin='50px 0 0'
                        key={`${data.title}_title_container`}
                    >
                        <h4>{data.caption.toUpperCase()}</h4>
                        <h2>{data.title.toUpperCase()}</h2>
                        <p>{data.subtitle}</p>
                    </TitleContainer>
                    <MiddleContainer
                        key={`${data.title}_middle_container`}
                    >

                        {data.inputs && data.inputs.map((e, i) => (
                            <Input
                                value={e.value}
                                onChange={(event) => e.onChange(event.target.value)}
                                label={e.label}
                                placeholder={e.placeholder}
                                type={e.type ? e.type : 'text'}
                                margin='10px 0'
                                width={e.width ? e.width : '100%'}
                                small
                                key={e.label}
                            />
                        ))}
                        {/* <Select /> */}
                        {/* <Select
                            label='Quantidade de parcelas'
                            // placeholder='Insira o seu telefone com DDD'
                            value={user.uf}
                            onChange={newValue => setUser({
                                ...user,
                                uf: newValue.target.value
                            })}
                            options={states}
                            key='parcelas_num_input'
                            small
                            margin='10px 10px 10px 0'
                            width='25%'
                        /> */}
                    </MiddleContainer>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default Finance