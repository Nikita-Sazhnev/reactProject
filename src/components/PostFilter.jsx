import React from 'react'
import MyInput from './UI/Input/MyInput'
import MySelect from './UI/Select/MySelect'


const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Поиск"
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <hr style={{marginTop: '15px'}} />
      <MySelect
        defaultValue="Сортировка"
        value={filter.sort}
        onChange={sort => setFilter({...filter, sort: sort})}
        options={[
          {value: 'title', name: 'Заголовок'},
          {value: 'body', name: 'Описание'}
        ]}
      />
    </div>
  )
}
export default PostFilter
