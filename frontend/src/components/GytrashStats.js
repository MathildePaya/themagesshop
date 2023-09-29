import ProgressBar from 'react-bootstrap/ProgressBar';

function GytrashStats({hunger, energy, health, complicity}) {

    function progressBarVariant(number) {
        return number <= 19 ? 'danger' : number >= 40 ? 'success' : 'warning';
    }

    return(
        <div>
            <div className="grid grid-cols-4 text-center">
                <div className="px-2 py-1">Hunger</div>
                <div className="px-2 py-1 col-span-3">
                    <ProgressBar variant={progressBarVariant(100-hunger)} now={hunger} label={`${hunger}%`}/>
                </div>
            </div>
            <div className="grid grid-cols-4 text-center">
                <div className="px-2 py-1">Energy</div>
                <div className="px-2 py-1 col-span-3">
                    <ProgressBar variant={progressBarVariant(energy)} now={energy} label={`${energy}%`}/>
                </div>
            </div>
            <div className="grid grid-cols-4 text-center">
                <div className="px-2 py-1">Health</div>
                <div className="px-2 py-1 col-span-3">
                    <ProgressBar variant={progressBarVariant(health)} now={health} label={`${health}%`}/>
                </div>
            </div>
            <div className="grid grid-cols-4 text-center">
                <div className="px-2 py-1">Complicity</div>
                <div className="px-2 py-1 col-span-3">
                    <ProgressBar variant={progressBarVariant(complicity)} now={complicity} label={`${complicity}%`}/>
                </div>
            </div>
        </div>
    )
}

export default GytrashStats;