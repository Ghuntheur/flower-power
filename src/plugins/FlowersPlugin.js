import flowers from '../constants/flowers'
import { MONTHS } from '../constants'

export default {
  install: Vue => {
    const parsedData = flowers
      .map(flower => ({
        ...flower,
        months: flower.months
          .replace(/ /g, '')
          .split(',')
          .map(month => MONTHS.indexOf(month))
          .sort((a, b) => a - b)
      }))
      .sort((a, b) => a.name.localeCompare(b.name))

    Vue.prototype.$_getFlowersData = () => parsedData

    Vue.prototype.$_getMonthFromNumber = number => MONTHS[number]
  }
}
