import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './TallySheet.css';


function TallySheet(habitEventList){

  const [treeTotal, setTreeTotal] = useState(0)

  SumTree(habitEventList);

  function SumTree(habitEventList) {
    console.log('habitEventList in SumTree', habitEventList);
    // console.log('habitEventList.habitEventList in SumTree', habitEventList.habitEventList);
    // let treeBools = habitEventList.habitEventList.map(function (habit) {
    //   return habit.tree; });
    // console.log('treeBools: ', treeBools);
    // let tempSum = (treeBools.filter(a => a !== false)).length;
    // console.log('tempSum: ', tempSum);
    // setTreeTotal(1);
    // return tempSum;
    }
    //
    // console.log('totalTree before sum', treeTotal);
    // SumTree(habitEventList);
    // console.log('totalTree after sum', treeTotal);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


console.log('Tally!');
    return (
      <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
<Collapse isOpen={isOpen}>
  <Card>
    <CardBody>
    Anim pariatur cliche reprehenderit,
     enim eiusmod high life accusamus terry richardson ad squid. Nihil
     anim keffiyeh helvetica, craft beer labore wes anderson cred
     nesciunt sapiente ea proident.
    </CardBody>
  </Card>
</Collapse>

        <h1>TallySheet</h1>
        <h3>Total Trees:`${ treeTotal }`</h3>
      </div>
    );


  }

  export default TallySheet;
