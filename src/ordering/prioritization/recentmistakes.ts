import { CardStatus } from '../../cards/cardstatus.js'
import { CardOrganizer } from '../cardorganizer.js'

function newRecentMistakesFirstSorter (): CardOrganizer {
  return {
    reorganize(cards: CardStatus[]): CardStatus[] {
      const mistakes: CardStatus[] = []
      const others: CardStatus[] = []

      for (const card of cards) { //all of the cards in the list
        const results = card.getResults()  //тухайн картын бүх хариултын түүх
        const last = results[results.length - 1]

        if (results.length > 0 && last === false) {
          mistakes.push(card)
        } else {
          others.push(card)
        }
      }

      return [...mistakes.reverse(), ...others]
    }
  }
}

export { newRecentMistakesFirstSorter }