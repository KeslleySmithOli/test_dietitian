'use client'

interface ObservationsProps {
  isSaved: boolean
  observation: string
  onObservationChange: (observation: string) => void
}

export function Observations({ isSaved, observation, onObservationChange }: ObservationsProps) {
  return (
    <div>
      <h2 className="text-base text-[#675DFF] font-semibold mb-2">Observação</h2>
      {!isSaved ? (
        <textarea
          value={observation}
          onChange={(e) => onObservationChange(e.target.value)}
          className="w-[234px] border border-[1px] rounded-[5px] px-3 py-2 text-sm h-[70px] resize-none"
        />
      ) : (
        <p className="text-sm text-[#414552]">{observation || '-'}</p>
      )}
    </div>
  )
}
