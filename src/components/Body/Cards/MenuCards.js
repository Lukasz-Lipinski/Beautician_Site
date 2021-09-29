import React, { useMemo } from 'react';
import { Card } from './Card';
import Cards from './Cards';
import '../../../styles/cards.scss';

export default function MenuCards() {

  const cardConfig = useMemo(() => [
    { title: "medycyna estetyczna", name: 'medycyna_estetyczna' },
    { title: "zabiegi twarzy", name: 'zabiegi_twarzy' },
    { title: "zabiegi na cialo", name: 'zabiegi_na_cialo' },
    { title: "zabiegi na dlonie i paznokcie", name: 'zabiegi_na_dlonie_i_paznokcie' },
    { title: "zabiegi dla panów", name: 'zabiegi_dla_panów' },
    { title: "zabiegi na włosy", name: 'zabiegi_na_włosy' },
  ])

  return (
    <Cards className="cards">
      {cardConfig.map(card => <Card title={card.title} name={card.name} />)}
    </Cards>
  )
}