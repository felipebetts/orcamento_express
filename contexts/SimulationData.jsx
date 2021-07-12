import { createContext, useEffect, useState } from "react"
import { baseObraBranca } from "../utils/base_obra_branca"


export const SimulationDataContext = createContext()

export const SimulationDataContextProvider = ({ children }) => {

    const [simData, setSimData] = useState({
        estilo: '',
        pavimentos: 0,
        escada: '',
        paredes: '',
        telhas: '',
        garagem: {
            value: '',
            pattern: '',
            confort: '',
        },
        sala: {
            value: '',
            pattern: '',
            confort: '',
        },
        cozinha: {
            value: '',
            pattern: '',
            confort: '',
        },
        areaGourmet: {
            value: '',
            pattern: '',
            confort: '',
        },
        areaServico: {
            value: '',
            pattern: '',
            confort: '',
        },
        despensa: {
            value: '',
            pattern: '',
            confort: '',
        },
        escritorio: {
            value: '',
            pattern: '',
            confort: '',
        },
        quartos: {
            value: [
                {
                    quarto: '',
                    suite: '',
                    closet: ''
                },
            ],
            pattern: '',
            confort: '',
        },
        lavabos: {
            value: new Array(4).fill(''),
            pattern: '',
            confort: '',
        },
        banheiros: {
            value: new Array(4).fill(''),
            pattern: '',
            confort: '',
        },
        instalacoes: {
            hidraulica: '',
            eletrica: '',
        },
        // confortos: '',
        // acabamento: '',
    })

    const [resources, setResources] = useState({
        // first page:
        resourcesSelect: '',
        financed_before: '',
        land_status: '',
        project_status: '',

        // step 0:
        renda: '',
        dob: '',
        estado_civil: '',
        local_construcao: '',
        //  step 1:
        valor_terreno: '',
        valor_entrada: '',
        valor_fgts: '',
        num_pis: '',
        mod_financiamento: '',
    })

    const [baseSqMtr, setBaseSqMtr] = useState({
        value: 0,
        category: ''
    })

    const baseSqrMtrValueCalculator = (category) => {
        console.log('category: ', category)
        if (simData.pavimentos === 1) {
            return baseObraBranca[category].one_pavement_meter
        }
        if (simData.pavimentos > 1) {
            const currentBase = baseObraBranca[category]
            const sqrMeterValue = (currentBase.initial_services + currentBase.foundation + 
                (currentBase.structure * 1.08) + currentBase.slab + currentBase.walls) / 100
            return sqrMeterValue
        }
        return 0
    }

    useEffect(() => {
        console.log('simData.paredes: ', simData.paredes)
        switch (simData.paredes) {
            case 'PAREDE ECONOMY':
                setBaseSqMtr({
                    ...baseSqMtr,
                    category: 'economy'
                })
                break;
        
            case 'PAREDE STANDARD':
                setBaseSqMtr({
                    ...baseSqMtr,
                    category: 'standard'
                })
                break;
        
            case 'PAREDE PREMIUM':
                setBaseSqMtr({
                    ...baseSqMtr,
                    category: 'premium'
                })
                break;

            default:
                break;
        }
    }, [simData.paredes])

    useEffect(() => {
        if (baseSqMtr.category !== '') {
            setBaseSqMtr({
                ...baseSqMtr,
                value: baseSqrMtrValueCalculator(baseSqMtr.category)
            })
        }
    }, [baseSqMtr.category, simData.pavimentos])

    

    useEffect(() => {
        console.log('baseSqMtr: ', baseSqMtr)
    }, [baseSqMtr])

    // useEffect(() => {
    //     console.log('simData: ', simData)
    // }, [simData])
    
    // useEffect(() => {
    //     console.log('resources: ', resources)
    // }, [resources])

    return (
        <SimulationDataContext.Provider value={{
            simData,
            setSimData,
            resources,
            setResources,
            baseSqMtr,
            setBaseSqMtr,
            baseSqrMtrValueCalculator,
        }}>
            { children }
        </SimulationDataContext.Provider>
    )
}