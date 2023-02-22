import { View, TextInput} from 'react-native'
import React from 'react'

const FormInput = ({label,placeholder,value,...rest}) => {
  return (
    <View className="pt-2 pb-5 ">
      <View className="border border-zinc-700 pl-3 rounded-md  ">
      <TextInput className="placeholder: text-slate-300 hover:file:bg-violet-100 "
        value={value}
        label={label}
        placeholder={placeholder}
        {...rest}
      />
    </View>
    </View>
  )
}

export default FormInput