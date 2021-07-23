import { createContext, useEffect, useState } from "react";
import { pmt } from '../utils/pmt'


export const FinancialSimContext = createContext()

export const FinancialSimContextProvider = ({ children }) => {

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
        parcelas: '',
    })

    const [summary, setSummary] = useState({
        jurosAA: 0.08,
        jurosAM: 0.0064,
        prestamista: 0.00038128125,
        txAdm: 25,
        valorFinanciamento: 0,
        valorImovel: 0,

        parcelaPrice: 0,
        parcelaSAC: [
            0,
            0
        ],
        amortizacao: 0,
    })


    useEffect(() => {
        if (resources.valor_entrada > 0 && !isNaN(parseFloat(resources.valor_entrada))) {
            const valorImovel = parseFloat(resources.valor_entrada) / 0.2
            const valorFinanciado = valorImovel - parseFloat(resources.valor_entrada)
            setSummary({
                ...summary,
                valorFinanciamento: valorFinanciado,
                valorImovel
            })
            
        }
    }, [resources.valor_entrada])

    useEffect(() => {
        if (!isNaN(parseFloat(resources.parcelas)) && !isNaN(parseFloat(summary.valorFinanciamento)) && !isNaN(parseFloat(summary.jurosAM))) {
            const pPrice = pmt(summary.jurosAM, resources.parcelas, summary.valorFinanciamento)
            setSummary({
                ...summary,
                parcelaPrice: pPrice
            })
        }
    }, [resources.parcelas, summary.valorFinanciamento])

    return (
        <FinancialSimContext.Provider value={{
            resources,
            setResources,
            summary,
            setSummary
        }}>
            { children }
        </FinancialSimContext.Provider>
    )
}