import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Image } from './Image'

@Entity('orphanages')
export class Orphanage {

  @PrimaryGeneratedColumn('increment')
  public id: number
  @Column()
  public name: string
  @Column()
  public latitude: string
  @Column()
  public longitude: string
  @Column()
  public about: string
  @Column()
  public instructions: string
  @Column()
  public opening_hours: string
  @Column()
  public open_on_weekends: boolean

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'orphanage_id' })
  public images: Image[]

}
