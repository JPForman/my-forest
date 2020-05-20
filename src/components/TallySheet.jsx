import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import './HabitController.css';

export default function TallySheet({treeTotal, flowerTotal, grassTotal, treePercent, flowerPercent, grassPercent, isOpen}) {
  return (
    <div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <div className='tallySheet'>
                <h1 className='tallyTitle'>TallySheet</h1>

                <div className="treeTally">
                  <h3>Total Trees: {treeTotal} </h3>
                  <h5>Percentage of Marked Days With Trees: {treePercent}%</h5>
                </div>

                <div className="flowerTally">
                <h3>Total Flowers: {flowerTotal} </h3>
                <h5>Percentage of Marked Days With Flowers: {flowerPercent}%</h5>
                </div>

                <div className='grassTally'>
                <h3>Total Grass: {grassTotal} </h3>
                <h5>Percentage of Marked Days With Grass: {grassPercent}%</h5>
                </div>
              </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  )
}
