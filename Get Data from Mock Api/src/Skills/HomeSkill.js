import HomeHeader from '../Home/HomeHeader'
import Skill from './Skill'
import './Skills.css'
export const HomeSkill = ({ item }) => {
    return (
        <div className='hmaindiv'>
            <div className='hheaderdiv'>
                <HomeHeader />
            </div>
            <div className='hinnerdiv'>
                <Skill item={item} />
            </div>
            <div className='hfotterdiv'><p>Rizwan Ali Bcsm-F19-178</p></div>
        </div>
    )
}
export default HomeSkill