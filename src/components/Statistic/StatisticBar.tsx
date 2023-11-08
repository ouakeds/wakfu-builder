import StatisticBox from "./StatisticBox";

const StatisticBar = () => {
    const statisticsGroups = [
      {
          groupName: 'global',
          statistics: [
            { name: "PA", suffixe: '', value: 12, picture: 'pa.webp' },
            { name: "PM", suffixe: '', value: 6, picture: 'pm.webp'},
            { name: "PO", suffixe: '', value: 3, picture: 'range.webp' },
            { name: "PV", suffixe: '', value: 1200, picture: 'health_point.webp' },
            { name: "Armure", suffixe: '', value: 12, picture: 'armor.webp' },
          ]
      },
      {
        groupName: 'armor',
        statistics: [
          { name: "Armure reçu", suffixe: '', value: 0, picture: 'received_armor.webp' },
          { name: "Armure donnée", suffixe: '', value: 0, picture: 'given_armor.webp' },
        ]
      },
      {
        groupName: 'resistance',
        statistics: [
          { name: "Res Eau", suffixe: '%', value: 10, picture: 'aqua_resistance.webp'},
          { name: "Res Terre", suffixe: '%', value: 60, picture: 'earth_resistance.webp'},
          { name: "Res Feu", suffixe: '%', value: 30, picture: 'fire_resistance.webp'},
          { name: "Res Air", suffixe: '%', value: 20, picture: 'wind_resistance.webp' },
          { name: "Res Critique", suffixe: '%', value: 20, picture: 'critical_resistance.webp' },
          { name: "Res Dos", suffixe: '%', value: 20, picture: 'rear_resistance.webp' },
        ]
      },
      {
        groupName: 'damages',
        statistics: [
          { name: "Dmg infligés", suffixe: '', value: 0, picture: 'damage.webp' },
          { name: "Soin réalisés", suffixe: '', value: 0, picture: 'healing_done.webp' },
          { name: "Coup Critique", suffixe: '', value: 0, picture: 'criticalhit.webp' },
          { name: "Parade", suffixe: '', value: 0, picture: 'block.webp' },
          { name: "Initiative", suffixe: '', value: 0, picture: 'initiative.webp' },
          { name: "Esquive", suffixe: '', value: 0, picture: 'dodge.webp' },
          { name: "Tacle", suffixe: '', value: 0, picture: 'tackle.webp' },
          { name: "Sagesse", suffixe: '', value: 0, picture: 'wisdom.webp' },
          { name: "Prospection", suffixe: '', value: 0, picture: 'prospection.webp' },
          { name: "Contrôle", suffixe: '', value: 0, picture: 'control.webp' },
          { name: "Volonté", suffixe: '', value: 0, picture: 'will.webp' },
        ]
      },
      {
        groupName: 'masteries',
        statistics: [
          { name: "Maîtrise Critique", suffixe: '', value: 0, picture: 'critical_mastery.webp' },
          { name: "Maîtrise Distance", suffixe: '', value: 0, picture: 'range_mastery.webp' },
          { name: "Maîtrise Mêlée", suffixe: '', value: 0, picture: 'melee_mastery.webp' },
          { name: "Maîtrise Dos", suffixe: '', value: 0, picture: 'rear_mastery.webp' },
          { name: "Maîtrise Soin", suffixe: '', value: 0, picture: 'healing_done.webp' },
          { name: "Maîtrise Berzerk", suffixe: '', value: 0, picture: 'berserk_mastery.webp' },
        ]
      },
    ]
  
    return (
      <div className=''>
        {
          statisticsGroups.map((group, index) => {
            return <StatisticBox key={index} statistics={group.statistics}/>
          })
        }
      </div>
    )
}
  
export default StatisticBar;