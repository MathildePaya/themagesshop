import FieldIcon from '../assets/FieldIcon.png'
import BarrenField from '../assets/BarrenFieldIcon.png'
import Cultivate from './Cultivate'
import Harvest from './Harvest'
import SellPlot from './SellPlot'
import lavenderIcon from '../assets/lavender.png';
import sageIcon from '../assets/sage.png';
import gingerIcon from '../assets/ginger.png';

function Field(props) {

    const plantIcons = {
        'lavender' : lavenderIcon,
        'sage' : sageIcon,
        'ginger' : gingerIcon
    }

    return(
        
                <tr>
                    <th className='px-4 py-2'>
                        {(props.state === 'fallow')? <img className="w-[100px] mx-auto" src={BarrenField} alt="fallow land" /> : <img className="w-[100px] mx-auto" src={FieldIcon} alt="growing seeds" />}
                        
                    </th>
                    <th className='px-2 text-center'>
                        {props.size}m²
                    </th>
                    <th className='px-2'>
                        {props.state}
                    </th>
                    <th className='flow-root p-2' >
                        <div className='float-left'>
                            <div className='flex flex-row items-center space-x-2'>
                                {props.plant !== 'none' && (
                                    <>
                                    <img src={plantIcons[props.plant]} alt={`Icon for ${props.plant}`} width={50} />
                                    <p>{props.plant}</p>
                                    </>
                                )}
                            </div>
                            
                        </div>
                        <div className='float-right'>
                            {props.state === 'fallow' ? 
                                <Cultivate id={props.id} size={props.size} updateField={props.updateField} />
                            : <Harvest id={props.id} updateField={props.updateField} plant={props.plant} size={props.size} /> }
                        </div>
                    </th>
                    <th className='bg-thirdcustombg px-2'>
                        <SellPlot id={props.id} size={props.size} refresh={props.refresh} setRefresh={props.setRefresh} />
                    </th>
                </tr>
          
    )
}

export default Field