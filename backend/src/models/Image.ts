import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Orphanage } from './Orphanage'

@Entity('images')
export class Image {

  @PrimaryGeneratedColumn('increment')
  public id: number
  @Column()
  public path: string

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  public orphanage: Orphanage
}
