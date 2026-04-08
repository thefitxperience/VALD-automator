import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function CheckDropzone({ onFile, loading }) {
  const onDrop = useCallback(
    (accepted) => {
      if (accepted.length > 0) onFile(accepted[0])
    },
    [onFile]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel.sheet.macroEnabled.12': ['.xlsm'],
      'application/vnd.ms-excel': ['.xls'],
    },
    multiple: false,
    disabled: loading,
  })

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-brand-500 bg-brand-50' : 'border-gray-300 hover:border-gray-400 bg-white'}
        ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <input {...getInputProps()} />
      <div className="text-4xl mb-3">📂</div>
      {loading ? (
        <p className="text-gray-500">Processing file…</p>
      ) : isDragActive ? (
        <p className="text-brand-600 font-medium">Drop it here</p>
      ) : (
        <>
          <p className="text-gray-700 font-medium">Drop your check file here</p>
          <p className="text-gray-400 text-sm mt-1">or click to browse (.xlsx / .xlsm)</p>
        </>
      )}
    </div>
  )
}
