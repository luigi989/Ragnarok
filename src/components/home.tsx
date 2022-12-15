import GridArea from '../components/gridArea';
import Footer from '../components/footer';

import gods from '../json/gods.json';
import creatures from '../json/creatures.json';
import lore from '../json/lore.json';

export default function Home() {
    return (
        <div>
            <div className='w-11/12 mx-auto flex flex-col gap-2'>
                <GridArea data={gods.content} type='gods' />
                <GridArea data={creatures.content} type='creatures' />
                <GridArea data={lore.content} type='lore' />
            </div>
            <Footer />
        </div>
    );
}