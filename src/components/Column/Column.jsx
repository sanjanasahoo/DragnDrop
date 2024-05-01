import React from 'react'
import './Column.css'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Task } from '../Task/Task'
export const Column = ({tasks}) => {
    
  return (
    <div className='column'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>

        {tasks.map((task) => {
            return(
                <Task title={task.title} id ={task.id} key={task.id}/>                

            )
        }

        )}
                </SortableContext>

    </div>
  )
}
