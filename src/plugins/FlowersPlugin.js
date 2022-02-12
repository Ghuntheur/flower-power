import flowers from '../constants/flowers'

const MONTHS = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Aout',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
]

export default {
  install: Vue => {
    const parsedData = flowers.map(flower => ({
      ...flower,
      months: flower.months
        .replace(/ /g, '')
        .split(',')
        .map(month => MONTHS.indexOf(month))
        .sort((a, b) => a - b)
    }))

    Vue.prototype.$_getFlowersData = () => parsedData
  }
}
