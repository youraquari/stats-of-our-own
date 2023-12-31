import { MinimalDataset } from '@/lib/types'
import BarChartIcon from '@mui/icons-material/BarChart'
import TimelineIcon from '@mui/icons-material/Timeline'
import InfoIcon from '@mui/icons-material/Info'
import { Checkbox, FormControlLabel, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'

type Props = {
  disabled: boolean
  title: string
  dataset: MinimalDataset
  info?: { tooltip: string; link?: string }
  setState: React.Dispatch<React.SetStateAction<any>>
}

export function ChartTools({ title, disabled, dataset, info, setState }: Props) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <FormControlLabel
          control={<Checkbox checked={!dataset.hidden} />}
          label={title}
          onChange={() => setState({ ...dataset, hidden: !dataset.hidden })}
          disabled={disabled}
        />
        {info && (
          <Tooltip title={info.tooltip} placement="top-end">
            {info.link ? (
              <a href={info.link} target="_blank">
                <InfoIcon fontSize="small" className="text-gray-500" />
              </a>
            ) : (
              <InfoIcon fontSize="small" className="text-gray-500" />
            )}
          </Tooltip>
        )}
      </div>
      <ToggleButtonGroup
        color="primary"
        value={dataset.type}
        exclusive
        onChange={(e, newAlignment) => {
          if (newAlignment !== null) {
            setState({ ...dataset, type: newAlignment })
          }
        }}
        aria-label="Toggle to bar or line graph"
      >
        <ToggleButton
          value="bar"
          disabled={disabled || dataset.hidden}
          aria-label="Toggle to bar graph"
        >
          <BarChartIcon />
        </ToggleButton>
        <ToggleButton
          value="line"
          disabled={disabled || dataset.hidden}
          aria-label="Toggle to line graph"
        >
          <TimelineIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
