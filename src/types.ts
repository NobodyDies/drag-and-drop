export type BlockType = 'text' | 'image'

export interface IBlock {
  id: number
  type: BlockType
  content: string
}
