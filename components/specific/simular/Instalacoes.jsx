import { Box, Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../../common/RadioButtons"
import StatusBox from "../../common/StatusBox"
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "../../common/StepContent/styles"
import Input from '../../form/Input'
import FinishingPattern from "../../common/FinishingPattern"
import { useEffect, useState } from "react"
import { Parag } from "../../Text"
import Button from "../../common/Button"
import RadioButtonsList from "../../common/RadioButtons/RadioButtonsList"
import { ExplainingP } from "../../Text"


const InstalacoesSlide = ({ data }) => {

    const [instalacoes, setInstalacoes] = useState({
        hidraulica: '',
        eletrica: '',
    })
    // const [rows, setRows] = useState([1])

    const hidraulica = {
        title: 'Quarto',
        value: instalacoes.hidraulica,
        onChange: newValue => setInstalacoes({
            ...instalacoes,
            hidraulica: newValue
        }),
        options: [
            {
                value: 'so_agua_fria',
                label: 'APENAS ÁGUA FRIA',
                // description: 'Chuveiro elétrico, sem quecimento nas torneiras'
            },
            {
                value: 'agua_fria_e_quente',
                label: 'ÁGUA FRIA E QUENTE*',
            },
        ]
    }

    const eletrica = {
        title: 'Quarto',
        value: instalacoes.eletrica,
        onChange: newValue => setInstalacoes({
            ...instalacoes,
            eletrica: newValue
        }),
        options: [
            {
                value: '110',
                label: '110',
            },
            {
                value: '220',
                label: '220',
            },
            {
                value: 'both',
                label: '110 / 220',
            },
        ]
    }

    return (
        <>
            <Box height='50px'></Box>
            <SlideContainer
                key={'Hidráulicas'}
            >
                <StepImageContainer
                    key={`${'Hidráulicas'}_step_image_container`}
                >
                    <img style={{ width: '100%' }} src='/images/Ambientes/Ambientes12.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Hidráulicas'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Hidráulicas'}_title_container`}
                    >
                        <h4>{'Escolha o tipo de instalações'.toUpperCase()}</h4>
                        <h2>{'Hidráulicas'.toUpperCase()}</h2>
                    </TitleContainer>
                    <RadioButtons
                        options={hidraulica.options}
                        onChange={hidraulica.onChange}
                        select={hidraulica.value}
                    />
                    <TitleContainer
                        key={`${'Hidráulicas'}_title_container`}
                        margin='20px 0 0'
                    >
                        <h4>{'Escolha qual será a voltagem'.toUpperCase()}</h4>
                        <h2>{'Elétrica*'.toUpperCase()}</h2>
                    </TitleContainer>
                    <Box
                        margin='0 0 20px'
                    >
                        <RadioButtons
                            options={eletrica.options}
                            onChange={eletrica.onChange}
                            select={eletrica.value}
                        />
                    </Box>
                    <>
                        <StatusBox />
                        <ExplainingP
                            fontSize='0.6rem'
                            margin='8px 0 0 0'
                        >
                            * não comtempla instalações de equipamentos como boiler, placas fotovoltaicas e etc.
                        </ExplainingP>
                        <ExplainingP
                            fontSize='0.6rem'
                            margin='0'
                        >
                            ** Considerado da entrada de energia até o quadro principal. Pontos por cômodo: 4 (quatro) pontos de tomada,
                            2 (dois) pontos de iluminação (somente plafon simples), enfiação, conduítes, quadro de energia de até 4
                            pontos de iluminação externa ao imóvel (arandela de parede simples).
                        </ExplainingP>
                    </>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default InstalacoesSlide