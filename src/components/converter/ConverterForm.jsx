import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function ConverterForm({ quotation }) {

    const [formData, setFormData] = useState({
        from: 'USD',
        to: 'USD',
        input: 1,
        output: 1
    });

    const { from, to, input, output } = formData;

    useEffect(() => {
        setFormData({
            ...formData,
            output: input * quotation[from] / quotation[to]
        })
    }, [from, to, input])

    const onSelectChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onInputChange = (e) => {
        setFormData({
            ...formData,
            input: e.target.value
        })
    }

    return (
        <div className='converter'>
            <div className='flex my-2 al-it-center'>
                <select name='from' onChange={e => onSelectChange(e)}>
                    <option value="USD">USD</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                </select>
                <i className="fas fa-arrow-right fa-2x"></i>
                <select name='to' onChange={e => onSelectChange(e)}>
                    <option value="USD">USD</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                </select>
            </div>
            <div className='flex my-2 al-it-center'>
                <input type="number" value={input} onChange={e => onInputChange(e)}/>
                <i className="fas fa-arrow-right fa-2x"></i>
                <input type="number" disabled value={output}/>
            </div>
        </div>
    )
}

ConverterForm.propTypes = {
    quotation: PropTypes.object.isRequired
}

export default ConverterForm;

