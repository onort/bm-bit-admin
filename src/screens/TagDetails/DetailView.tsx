import React from "react"
import { MdDelete as DeleteIcon, MdEdit as EditIcon } from "react-icons/md"
import cx from "classnames"

import styles from "./TagDetails.scss"
import { convertISODate } from "../../utils/format"
import {
  Button,
  Container,
  DetailCard,
  DetailCardItem,
  DetailCardTitle,
  Paper
} from "../../components"
import { TagData } from "../../types"

interface Props {
  tag: TagData
  onDeleteClick: () => void
  onEditClick: () => void
}

const DetailView: React.SFC<Props> = props => {
  const {
    createdAt,
    updatedAt,
    createdBy,
    metaDescription,
    metaTitle,
    name,
    slug
  } = props.tag
  const created = convertISODate(createdAt, "DD.MM.YYYY HH:mm")
  const updated = convertISODate(updatedAt, "DD.MM.YYYY HH:mm")
  const buttonsRow = cx(styles.row, styles.buttons)
  return (
    <>
      <Container className={buttonsRow}>
        <Button
          className={styles.edit}
          icon={<EditIcon />}
          text="Edit Tag"
          onClick={props.onEditClick}
        />
        <Button
          className={styles.delete}
          icon={<DeleteIcon />}
          text="Delete Tag"
          onClick={props.onDeleteClick}
        />
      </Container>
      <Container className={styles.row}>
        <Paper className={styles.half} elevation={2}>
          <h1 className={styles.name}>
            &#35;
            {name}
          </h1>
        </Paper>
        <Paper className={styles.half} elevation={2}>
          <DetailCard>
            <DetailCardTitle content="Info" />
            <DetailCardItem content={`/${slug}`} title="Slug" />
            <DetailCardItem content={createdBy.name} title="Author" />
            <DetailCardItem content={created} title="Date Created" />
            <DetailCardItem content={updated} title="Last Updated" />
          </DetailCard>
        </Paper>
      </Container>
      <Container className={styles.row}>
        <Paper className={styles.half} elevation={2}>
          <h2 className={styles.label}>Meta Title</h2>
          <p className={styles.text}>{metaTitle ? metaTitle : "-"}</p>
        </Paper>
        <Paper className={styles.half} elevation={2}>
          <h2 className={styles.label}>Meta Description</h2>
          <p className={styles.text}>
            {metaDescription ? metaDescription : "-"}
          </p>
        </Paper>
      </Container>
    </>
  )
}

export default DetailView
